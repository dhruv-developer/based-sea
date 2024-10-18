// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SkillVerification {
    struct Skill {
        string name;
        string level;
        uint256 verificationDate;
        address verifier;
    }

    struct Certification {
        string name;
        string issuer;
        uint256 issueDate;
    }

    mapping(address => Skill[]) public userSkills;
    mapping(address => Certification[]) public userCertifications;

    event SkillAdded(address indexed user, string name, string level);
    event CertificationAdded(address indexed user, string name, string issuer);

    function addSkill(address _user, string memory _name, string memory _level) public {
        userSkills[_user].push(Skill(_name, _level, block.timestamp, msg.sender));
        emit SkillAdded(_user, _name, _level);
    }

    function addCertification(address _user, string memory _name, string memory _issuer) public {
        userCertifications[_user].push(Certification(_name, _issuer, block.timestamp));
        emit CertificationAdded(_user, _name, _issuer);
    }

    function getUserSkills(address _user) public view returns (Skill[] memory) {
        return userSkills[_user];
    }

    function getUserCertifications(address _user) public view returns (Certification[] memory) {
        return userCertifications[_user];
    }
}