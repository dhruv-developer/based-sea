import Web3 from 'web3';
import SkillVerificationABI from '../contracts/SkillVerificationA.json';

// Replace with the actual deployed contract address
const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';

let web3: Web3 | undefined;
let skillVerificationContract: any;

/**
 * Initialize Web3 and the contract using Base.
 */
export const initWeb3Base = async (): Promise<void> => {
  try {
    if (typeof window.ethereum !== 'undefined') {
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (typeof window.web3 !== 'undefined') {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    if (!web3) {
      throw new Error('No Web3 provider found. Please ensure Metamask or a Web3 wallet is installed.');
    }

    skillVerificationContract = new web3.eth.Contract(SkillVerificationABI.abi, contractAddress);

    console.log('Web3 initialized and contract connected');
  } catch (error) {
    console.error('Failed to initialize Web3 or connect to contract:', error);
  }
};

/**
 * Get the user's account.
 */
export const getAccountBase = async (): Promise<string> => {
  try {
    if (!web3) throw new Error('Web3 is not initialized. Please call initWeb3Base() first.');
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) throw new Error('No accounts found. Please ensure wallet is connected.');
    return accounts[0];
  } catch (error) {
    throw new Error(`Failed to retrieve accounts: ${error.message}`);
  }
};

/**
 * Add a skill to the user's profile using Base.
 */
export const addSkillBase = async (name: string, level: string): Promise<void> => {
  try {
    const account = await getAccountBase();
    await skillVerificationContract.methods.addSkill(account, name, level).send({ from: account });
    console.log('Skill added successfully');
  } catch (error) {
    console.error(`Failed to add skill: ${error.message}`);
  }
};

/**
 * Add a certification to the user's profile using Base.
 */
export const addCertificationBase = async (name: string, issuer: string): Promise<void> => {
  try {
    const account = await getAccountBase();
    await skillVerificationContract.methods.addCertification(account, name, issuer).send({ from: account });
    console.log('Certification added successfully');
  } catch (error) {
    console.error(`Failed to add certification: ${error.message}`);
  }
};

/**
 * Get the user's skills using Base.
 */
export const getUserSkillsBase = async (): Promise<any[]> => {
  try {
    const account = await getAccountBase();
    const skills = await skillVerificationContract.methods.getUserSkills(account).call();
    return skills;
  } catch (error) {
    console.error(`Failed to fetch user skills: ${error.message}`);
    return [];
  }
};

/**
 * Get the user's certifications using Base.
 */
export const getUserCertificationsBase = async (): Promise<any[]> => {
  try {
    const account = await getAccountBase();
    const certifications = await skillVerificationContract.methods.getUserCertifications(account).call();
    return certifications;
  } catch (error) {
    console.error(`Failed to fetch user certifications: ${error.message}`);
    return [];
  }
};
