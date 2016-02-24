---
layout: api-page
title: Candidate
permalink: /documentation/api/candidate/
api_menu: yes
---

### Overview

| URL | `https://api.thesearchparty.com/1.0/Candidate` |
| Methods Supported | GET , POST |
| Description | Allows you to retrieve a candidate by their ID (GUID) |

### GET Candidate

The GET method supports retrieving a candidate belonging to the Recruiter account

To retrieve Candidate simply pass in ID of the Candidate in the query string

`https://api.thesearchparty.com/1.0/candidate/{ID}`

```

   {
    "Id": "77c090a1-ad9d-e311-82c0-50465d3e4329",
    "ContactSiteUserId": null,
    "CandidateReference": "test123",
    "TitleId": 1,
    "Firstname": "Joey",
    "Middlename": "Middelo",
    "Lastname": "Smith",
    "KnownAsName": "Skip",
    "DateOfBirth": "1991-01-28T00:00:00",
    "ExecutiveSummary": "This is a summary",
    "MarketplaceSummary": "This is a summary again",
    "QuickNotes": "quicko note one",
    "Phone": "61423123123",
    "Mobile": "61423123123",
    "WorkPhone": "61423123123",
    "OtherPhone": "61423123123",
    "Fax": "123456789",
    "GenderId": null,
    "Twitter": "HandlerDude",
    "LinkedIn": "myLinkedIn",
    "WebsiteUrl": "www.testurl.com",
    "AlternateEmail": "test@gmail.com",
    "Email": "test@gmail.com",
    "CurrentJobTitle": null,
    "ABN": null,
    "ACN": null,
    "PrimaryAddress1": "82 George St",
    "PrimaryAddress2": null,
    "PrimarySuburb": "Sydney",
    "PrimaryStateId": 1,
    "PrimaryState": "NSW",
    "PrimaryPostcode": "2010",
    "PrimaryCountryId": 6,
    "PrimaryCountryText": "Australia",
    "SecondaryAddress1": "Kale House, Level 1",
    "SecondaryAddress2": "116 Mary St",
    "SecondarySuburb": "North Sydney",
    "SecondaryStateId": 3,
    "SecondaryState": null,
    "SecondaryPostcode": null,
    "SecondaryCountryId": 2,
    "SecondaryCountryText": "Albania",
    "SalaryTypeId": 1,
    "MinHourlyRate": 0.00,
    "MinDailyRate": 0.00,
    "MinYearlyRate": 0.00,
    "MaxHourlyRate": 0.00,
    "MaxDailyRate": 0.00,
    "MaxYearlyRate": 0.00,
    "AvailabilityId": 0,
    "DateAvailableFrom": null,
    "IsPreferenceTemporary": true,
    "IsPreferenceParttime": true,
    "IsPreferenceFulltime": true,
    "IsPreferenceContract": true,
    "IsAvailableRelocate": true,
    "IsAvailableTravel": true,
    "HasOwnTransport": true,
    "NoticePeriodTypeId": null,
    "NoticePeriodTypeString": "Unknown",
    "NoticePeriod": null,
    "NoticePeriodDescription": "Not specified",
    "PreferredJobTitle": "tester",
    "PreferredEmployer1": null,
    "PreferredEmployer2": null,
    "PreferredEmployer3": null,
    "PreferredEmployer4": null,
    "PreferredEmployer5": null,
    "PreferredSuburb1": null,
    "PreferredSuburb2": null,
    "PreferredSuburb3": null,
    "PreferredSuburb4": null,
    "PreferredSuburb5": null,
    "TravelRadius": null,
    "TravelRadiusFromPostcode": null,
    "IsCitizen": false,
    "PassportNumber": "q1213",
    "PassportIssueCountryId": null,
    "HasVisa": false,
    "VisaType": null,
    "VisaValidUntil": "2014-02-06T00:00:00",
    "VisaRestrictions": "Nothing",
    "VisaDocumentId": null,
    "Nationality": "Australia"
}

```

### POST Candidate

The POST method supports updating or creating a candidate. The only difference for an update and a create is the presence of ‘Id’ field. If this is present then update is attempted.

The response contains the candidate object, the same object that is retrieved by the GET above.

*   [Candidate](/documentation/api/candidate)
*   [Candidate Education](/documentation/api/candidate-education)
*   [Candidate Certifications](/documentation/api/candidate-certifications)
*   [Candidate Publications](/documentation/api/candidate-publications)
*   [Candidate Skills](/documentation/api/candidate-skills)
*   [Filters](/documentation/api/filters)
*   [Vacancy](/documentation/api/vacancies)