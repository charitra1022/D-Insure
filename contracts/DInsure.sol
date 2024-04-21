// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract DInsure {
    // struct for customer's any underlying disease -----------------------------
    struct Disease {
        string diseaseName;
        bool isCured;
        bool isChronic;
    }

    // struct for the billing info given by the hospital
    struct Billing {
        address customerAddress;
        address hospitalAddress;
        address insuranceCompanyAddress;
        string insuranceId;
        uint256 payableAmount;
    }

    // Struct for the customer --------------------------------
    struct Customer {
        bool exists;
        // Customer personal details
        address customerAddress;
        string customerName;
        string customerDOB;
        string customerPhone;
        string customerHomeAddress;
        // Customer health details
        string customerBloodGrp;
        string customerGender;
        // Disease[] customerDiseases;

        // Customer government details
        string customerAadhar;
    }

    // struct for an insurance object --------------------------------
    struct Insurance {
        string insuranceName;
        string insuranceId;
        bool isClaimed;
        address customerAddress;
        // address hospitalAddress;
        address insuranceCompanyAddress;
        bool isActive;
        uint256 coverableAmount;
    }

    // struct for the insurance company --------------------------------
    struct InsuranceCompany {
        address companyAddress;
        string companyName;
        string companyPhone;
        // Insurance[] companyInsurances;
    }

    // struct for the hospital data -----------------------------
    struct Hospital {
        address hospitalAddress;
        string hospitalName;
        string hospitalLicense;
    }


    // Mapping to store customers --------------------------------
    mapping(address => Customer) public customers;

    // Mapping to store insurance companies --------------------------------
    mapping(address => InsuranceCompany) public insuranceCompanies;

    // Mapping to store hospitals -----------------------------
    mapping(address => Hospital) public hospitals;

    // Mapping to store billings for customer
    mapping(address => Billing[]) public customerBillings;

    // Mapping to store billings for hospital
    mapping(address => Billing[]) public hospitalBillings;

    mapping(address => Insurance) public customerToInsurance; //--------------------------------
    mapping(address => Insurance) public companyToInsurance; //--------------------------------
    mapping(address => Disease) public customerToDisease; //-----------------------------

    address[] public insuranceCompaniesList;
    address[] public hospitalsList;
    // Events
    event CustomerRegistered(
        //--------------------------------
        address indexed customerAddress,
        string customerName
    );
    event InsuranceCompanyRegistered(
        //-----------------------------
        address indexed companyAddress,
        string companyName
    );
    event InsuranceClaimed(
        address indexed customerAddress,
        string insuranceId,
        uint256 claimAmount
    );
    event HospitalRegistered(
        //-----------------------------
        address indexed hospitalAddress,
        string hospitalName
    );

    // Modifier to check if customer exists --------------------------------
    modifier customerExists(address _customerAddress) {
        require(customers[_customerAddress].exists, "Customer does not exist");
        _;
    }

    // Modifier to check if insurance company exists --------------------------------
    modifier insuranceCompanyExists(address _companyAddress) {
        require(
            insuranceCompanies[_companyAddress].companyAddress != address(0),
            "Insurance company does not exist"
        );
        _;
    }

    // Modifier to check if hospital exists --------------------------------
    modifier hospitalExists(address _hospitalAddress) {
        require(
            hospitals[_hospitalAddress].hospitalAddress != address(0),
            "Hospital does not exist"
        );
        _;
    }

    // Register a new customer --------------------------------
    function registerCustomer(
        address _customerAddress,
        string memory _customerName,
        string memory _customerDOB,
        string memory _customerPhone,
        string memory _customerHomeAddress,
        string memory _customerBloodGrp,
        string memory _customerGender,
        string memory _customerAadhar
    ) public {
        require(!customers[_customerAddress].exists, "Customer already exists");
        customers[_customerAddress] = Customer(
            true,
            _customerAddress,
            _customerName,
            _customerDOB,
            _customerPhone,
            _customerHomeAddress,
            _customerBloodGrp,
            _customerGender,
            _customerAadhar
        );
        emit CustomerRegistered(_customerAddress, _customerName);
    }

    // Function to get the list of all hospitals
    function getHospitals() public view returns (address[] memory) {
        return hospitalsList;
    }

    // Function to get the list of all insurance companies
    function getInsuranceCompanies() public view returns (address[] memory) {
        return insuranceCompaniesList;
    }

    // Function to check if a customer exists
    function getCustomer(address _customerAddress) public view returns (Customer memory) {
        return customers[_customerAddress];
    }
    // Function to get insurance company details by address
    function getInsuranceCompany(address _companyAddress) public view returns (InsuranceCompany memory) {
        return insuranceCompanies[_companyAddress];
    }

    // Function to get hospital details by address
    function getHospital(address _hospitalAddress) public view returns (Hospital memory) {
        return hospitals[_hospitalAddress];
    }


    // Function to get customer insurance details by address
    function getCustomerInsurance(address _customerAddress) public view returns (Insurance memory) {
        return customerToInsurance[_customerAddress];
    }

    // Function to get company insurance details by address
    function getCompanyInsurance(address _companyAddress) public view returns (Insurance memory) {
        return companyToInsurance[_companyAddress];
    }


    // Register a new insurance company --------------------------------
    function registerInsuranceCompany(
        address _companyAddress,
        string memory _companyName,
        string memory _companyPhone
    ) public {
        require(
            insuranceCompanies[_companyAddress].companyAddress == address(0),
            "Insurance company already registered"
        );
        insuranceCompanies[_companyAddress] = InsuranceCompany(
            _companyAddress,
            _companyName,
            _companyPhone
        );
         insuranceCompaniesList.push(_companyAddress);
        emit InsuranceCompanyRegistered(_companyAddress, _companyName);
    }

    // Add a new insurance --------------------------------
    function addInsurance(
        address _customerAddress,
        string memory _insuranceName,
        string memory _insuranceId,
        uint256 _coverableAmount,
        address _insuranceCompanyAddress
    )
        public
        customerExists(_customerAddress)
        insuranceCompanyExists(_insuranceCompanyAddress)
    {
        Insurance memory newInsurance = Insurance(
            _insuranceName,
            _insuranceId,
            false,
            _customerAddress,
            // _hospitalAddress,
            _insuranceCompanyAddress,
            true,
            _coverableAmount
        );
        customerToInsurance[_customerAddress] = newInsurance;
        companyToInsurance[_insuranceCompanyAddress] = newInsurance;
    }

    // Register a new hospital -----------------------------
    function registerHospital(
        address _hospitalAddress,
        string memory _hospitalName,
        string memory _hospitalLicense
    ) public {
        require(
            hospitals[_hospitalAddress].hospitalAddress == address(0),
            "Hospital already registered"
        );
        hospitals[_hospitalAddress] = Hospital(
            _hospitalAddress,
            _hospitalName,
            _hospitalLicense
        );
        hospitalsList.push(_hospitalAddress);
        emit HospitalRegistered(_hospitalAddress, _hospitalName);
    }

    // Add a new disease for a customer -----------------------------
    function addDiseaseForCustomer(
        address _customerAddress,
        string memory _diseaseName,
        bool _isCured,
        bool _isChronic
    ) public customerExists(_customerAddress) {
        Disease memory newDisease = Disease(_diseaseName, _isCured, _isChronic);
        customerToDisease[_customerAddress] = newDisease;
    }

    // Process insurance claim by the customer
    function processInsuranceClaim(
        address _customerAddress,
        string memory _insuranceId,
        uint256 _claimAmount
    ) external customerExists(_customerAddress) {
        require(_claimAmount > 0, "Claim amount must be greater than zero");

        Customer memory customer = customers[_customerAddress];
        require(customer.exists, "Customer does not exist");

        if (
            keccak256(
                bytes(customerToInsurance[_customerAddress].insuranceId)
            ) == keccak256(bytes(_insuranceId))
        ) {
            require(
                customerToInsurance[_customerAddress].isActive,
                "Insurance is not active"
            );
            require(
                !customerToInsurance[_customerAddress].isClaimed,
                "Insurance has already been claimed"
            );

            customerToInsurance[_customerAddress].isClaimed = true;
            emit InsuranceClaimed(_customerAddress, _insuranceId, _claimAmount);
            // Additional logic for processing claim amount can be added here
            return;
        }

        revert("Insurance not found");
    }

    // Add billing info provided by hospital to hospital and customer db ----------------------
    function addBillingInfo(
        address _customerAddress,
        address _hospitalAddress,
        address _insuranceCompanyAddress,
        string memory _insuranceId,
        uint256 _payableAmount
    )
        public
        customerExists(_customerAddress)
        hospitalExists(_hospitalAddress)
        insuranceCompanyExists(_insuranceCompanyAddress)
    {
        Billing memory newBilling = Billing(
            _customerAddress,
            _hospitalAddress,
            _insuranceCompanyAddress,
            _insuranceId,
            _payableAmount
        );
        customerBillings[_customerAddress].push(newBilling);
        hospitalBillings[_hospitalAddress].push(newBilling);
    }

    // Get total billings for a customer ----------------------
    function getTotalBillingsForCustomer(address _customerAddress)
        external
        view
        customerExists(_customerAddress)
        returns (uint256)
    {
        Billing[] memory billings = customerBillings[_customerAddress];
        uint256 totalBillings = 0;
        for (uint256 i = 0; i < billings.length; i++) {
            totalBillings += billings[i].payableAmount;
        }
        return totalBillings;
    }

    // Get total billings for a hospital ----------------------
    function getTotalBillingsForHospital(address _hospitalAddress)
        external
        view
        hospitalExists(_hospitalAddress)
        returns (uint256)
    {
        Billing[] memory billings = hospitalBillings[_hospitalAddress];
        uint256 totalBillings = 0;
        for (uint256 i = 0; i < billings.length; i++) {
            totalBillings += billings[i].payableAmount;
        }
        return totalBillings;
    }
}
