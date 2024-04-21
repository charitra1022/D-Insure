const contractAddress = "0x6A2bf6Db555a0af1615eFc256d238cA1E0cD1322"; // Replace with your actual contract address
const contractAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "customerName",
        "type": "string"
      }
    ],
    "name": "CustomerRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "hospitalAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "hospitalName",
        "type": "string"
      }
    ],
    "name": "HospitalRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "insuranceId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "claimAmount",
        "type": "uint256"
      }
    ],
    "name": "InsuranceClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "companyAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      }
    ],
    "name": "InsuranceCompanyRegistered",
    "type": "event"
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "companyToInsurance",
    "outputs": [
      {
        "internalType": "string",
        "name": "insuranceName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "insuranceId",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isClaimed",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "insuranceCompanyAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "coverableAmount",
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
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "customerBillings",
    "outputs": [
      {
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "hospitalAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "insuranceCompanyAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "insuranceId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "payableAmount",
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "customerToDisease",
    "outputs": [
      {
        "internalType": "string",
        "name": "diseaseName",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isCured",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isChronic",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "customerToInsurance",
    "outputs": [
      {
        "internalType": "string",
        "name": "insuranceName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "insuranceId",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isClaimed",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "insuranceCompanyAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "coverableAmount",
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "customers",
    "outputs": [
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "customerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "customerDOB",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "customerPhone",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "customerHomeAddress",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "customerBloodGrp",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "customerGender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "customerAadhar",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_companyAddress",
        "type": "address"
      }
    ],
    "name": "getCompanyInsurance",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "insuranceName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "insuranceId",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isClaimed",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "customerAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "insuranceCompanyAddress",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "coverableAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct DInsure.Insurance",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
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
    "name": "getCustomer",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "customerAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "customerName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "customerDOB",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "customerPhone",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "customerHomeAddress",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "customerBloodGrp",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "customerGender",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "customerAadhar",
            "type": "string"
          }
        ],
        "internalType": "struct DInsure.Customer",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
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
    "name": "getCustomerInsurance",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "insuranceName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "insuranceId",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isClaimed",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "customerAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "insuranceCompanyAddress",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "coverableAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct DInsure.Insurance",
        "name": "",
        "type": "tuple"
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
    "name": "getHospital",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "hospitalAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "hospitalName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "hospitalLicense",
            "type": "string"
          }
        ],
        "internalType": "struct DInsure.Hospital",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_companyAddress",
        "type": "address"
      }
    ],
    "name": "getInsuranceCompany",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "companyAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "companyName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "companyPhone",
            "type": "string"
          }
        ],
        "internalType": "struct DInsure.InsuranceCompany",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "hospitalBillings",
    "outputs": [
      {
        "internalType": "address",
        "name": "customerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "hospitalAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "insuranceCompanyAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "insuranceId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "payableAmount",
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "hospitals",
    "outputs": [
      {
        "internalType": "address",
        "name": "hospitalAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "hospitalName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "hospitalLicense",
        "type": "string"
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
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "insuranceCompanies",
    "outputs": [
      {
        "internalType": "address",
        "name": "companyAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "companyPhone",
        "type": "string"
      }
    ],
    "stateMutability": "view",
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
  }
];

export { contractAddress, contractAbi };
