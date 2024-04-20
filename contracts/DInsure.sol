// SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

contract DInsure {
    // struct for customer's any underlying disease
    struct Disease {
        string diseaseName;
        bool isCured;
        bool isChronic;
    }

    // struct for an insurance object
    struct Insurance {
        string insuranceName;
        string insuranceId;
        bool isClaimed;
        address customerAddress;
        address hospitalAddress;
        address insuranceCompanyAddress;
        bool isActive;
        uint256 coverableAmount;
    }

    // struct for the billing info given by the hospital
    struct Billing {
        address customerAddress;
        address hospitalAddress;
        address insuranceCompanyAddress;
        string insuranceId;
        uint256 payableAmount;
    }

    // Struct for the customer
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
        Disease[] customerDiseases;
        // Customer government details
        string customerAadhar;
        // Medicare/Medicaid Card

        // customer insurances enrolled in
        Insurance[] customerInsurances;
        // HealthInsuranceDocument customerHealthInsuranceDocument;
    }

    // struct for the insurance company
    struct InsuranceCompany {
        address companyAddress;
        string companyName;
        string companyPhone;
        Insurance[] companyInsurances;
    }

    // struct for the hospital data
    struct Hospital {
        address hospitalAddress;
        string hospitalName;
        string hospitalLicense;
    }
}
