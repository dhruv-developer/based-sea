import Web3 from 'web3';
import SkillVerificationABI from '../contracts/SkillVerificationA.json';

// Replace with the actual deployed contract address
const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';

let web3: Web3 | undefined;
let skillVerificationContract: any;

/**
 * Initialize web3 instance and the contract.
 */
export const initWeb3 = async (): Promise<void> => {
  if (typeof window.ethereum !== 'undefined') {
    // Modern dapp browsers
    web3 = new Web3(window.ethereum);
    try {
      // Request account access
      await window.ethereum.enable();
      skillVerificationContract = new web3.eth.Contract(SkillVerificationABI.abi, contractAddress);
    } catch (error) {
      console.error('User denied account access', error);
    }
  } else if (typeof window.web3 !== 'undefined') {
    // Legacy dapp browsers
    web3 = new Web3(window.web3.currentProvider);
    skillVerificationContract = new web3.eth.Contract(SkillVerificationABI.abi, contractAddress);
  } else {
    // Fallback to localhost
    console.log('No web3 detected. Falling back to http://localhost:8545.');
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    skillVerificationContract = new web3.eth.Contract(SkillVerificationABI.abi, contractAddress);
  }
};

/**
 * Get the current user account.
 */
export const getAccount = async (): Promise<string> => {
  if (!web3) throw new Error('Web3 is not initialized. Please call initWeb3() first.');
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0) {
    throw new Error('No accounts found. Please make sure your wallet is connected.');
  }
  return accounts[0];
};

/**
 * Add a skill for the current user.
 */
export const addSkill = async (name: string, level: string): Promise<void> => {
  const account = await getAccount();
  try {
    await skillVerificationContract.methods.addSkill(account, name, level).send({ from: account });
    console.log('Skill added successfully');
  } catch (error) {
    console.error('Failed to add skill:', error);
  }
};

/**
 * Add a certification for the current user.
 */
export const addCertification = async (name: string, issuer: string): Promise<void> => {
  const account = await getAccount();
  try {
    await skillVerificationContract.methods.addCertification(account, name, issuer).send({ from: account });
    console.log('Certification added successfully');
  } catch (error) {
    console.error('Failed to add certification:', error);
  }
};

/**
 * Get the skills of the current user.
 */
export const getUserSkills = async (): Promise<any> => {
  const account = await getAccount();
  try {
    const skills = await skillVerificationContract.methods.getUserSkills(account).call();
    return skills;
  } catch (error) {
    console.error('Failed to get user skills:', error);
    return [];
  }
};

/**
 * Get the certifications of the current user.
 */
export const getUserCertifications = async (): Promise<any> => {
  const account = await getAccount();
  try {
    const certifications = await skillVerificationContract.methods.getUserCertifications(account).call();
    return certifications;
  } catch (error) {
    console.error('Failed to get user certifications:', error);
    return [];
  }
};
