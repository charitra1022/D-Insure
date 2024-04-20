const contractAddress = "0x97817527999F47D561d3263C10466a7643c06ac5"; // Replace with your actual contract address
const contractAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_customerAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_customerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_customerDOB",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_customerPhone",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_customerHomeAddress",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_customerBloodGrp",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_customerGender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_customerAadhar",
        "type": "string"
      }
    ],
    "name": "registerCustomer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_companyAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_companyPhone",
        "type": "string"
      }
    ],
    "name": "registerInsuranceCompany",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_hospitalAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_hospitalName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hospitalLicense",
        "type": "string"
      }
    ],
    "name": "registerHospital",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_customerAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_insuranceName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_insuranceId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_coverableAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_insuranceCompanyAddress",
        "type": "address"
      }
    ],
    "name": "addInsurance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_customerAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_diseaseName",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "_isCured",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "_isChronic",
        "type": "bool"
      }
    ],
    "name": "addDiseaseForCustomer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_customerAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_insuranceId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_claimAmount",
        "type": "uint256"
      }
    ],
    "name": "processInsuranceClaim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_customerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_hospitalAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_insuranceCompanyAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_insuranceId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_payableAmount",
        "type": "uint256"
      }
    ],
    "name": "addBillingInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_customerAddress",
        "type": "address"
      }
    ],
    "name": "getTotalBillingsForCustomer",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_hospitalAddress",
        "type": "address"
      }
    ],
    "name": "getTotalBillingsForHospital",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export { contractAddress, contractAbi };
