---
layout: api-page
title: Vancancies
permalink: /documentation/api/vacancies/
api_menu: yes
---

# Vacancy

### GET Vacancy

| URL | `http://api.tempurer.com/services/vacancy.svc/get/{Id}` |
| Methods Supported | GET |
| Description | Allows you to retrieve a vacancy by ID |

```
    {
        "ApplyURL": "\/account\/apply\/xyz123?vacancyId=7f9e2bb3-7965-e411-bf06",
        "DateCommences": "\/Date(1416834000000+1100)\/",
        "DisplayRateOverride": null,
        "Id": "7f9e2bb3-7965-e411-bf06-50465dda7823",
        "IsPayRateVisible": true,
        "Location": "",
        "LocationCountry": null,
        "LocationCountryId": 6,
        "LocationState": "ACT",
        "LocationStateId": 3,
        "LocationSuburb": "Canberra",
        "MaxRate": 999.0,
        "MinRate": 99.0,
        "OwnerProfileImageUrl": "http:\/\/media.thesearchparty.com\/Images\/ThumbProfile\/xyz.jpg",
        "PaymentRateType": "Daily",
        "Summary": "This is a short summary of the vacancy",
        "Title": "Engineer",
        "UserReference": "V-TH-1411-6",
        "VacancyType": "Contract"
    }

```

* * *

### List Vacancies

| URL | `https://api.thesearchparty.com/services/vacancy.svc/list` |
| Methods Supported | GET |
| Description | Allows you to retrieve a vacancy list |

#### Parameters

| Name | Mandatory | Description |
| --- | --- | --- |
| page | No | Which page of the results to display. Defaults to page 1 (first page), if not specified. |
| pagesize | No | The number of results to be displayed per page. Defaults to 10, if not specified. |

The GET method supports retrieving vacancy listings by page (optional) and page size (optional).

`https://api.thesearchparty.com/services/vacancy.svc/list?page={PAGE}&pagesize={PAGESIZE}`

```
   [
    {
        "ApplyURL": "\/account\/apply\/xyz123?vacancyId=7f9e2bb3-7965-e411-bf06",
        "DateCommences": "\/Date(1416834000000+1100)\/",
        "DisplayRateOverride": null,
        "Id": "7f9e2bb3-7965-e411-bf06-50465dda7823",
        "IsPayRateVisible": true,
        "Location": "",
        "LocationCountry": null,
        "LocationCountryId": 6,
        "LocationState": "ACT",
        "LocationStateId": 3,
        "LocationSuburb": "Canberra",
        "MaxRate": 999.0,
        "MinRate": 99.0,
        "OwnerProfileImageUrl": "http:\/\/media.thesearchparty.com\/Images\/ThumbProfile\/xyz.jpg",
        "PaymentRateType": "Daily",
        "Summary": "This is a short summary of the vacancy",
        "Title": "Engineer",
        "UserReference": "V-TH-1411-6",
        "VacancyType": "Contract"
    }
    ]

```

* * *

### Search Vacancies

| URL | `https://api.thesearchparty.com/services/vacancy.svc/search` |
| Methods Supported | GET |
| Description | Allows searching of vacancy listings by fields defined below |

| Parameters | Mandatory | Description |
| --- | --- | --- |
| q | No | Performs a search based on a query term. If not supplied then behaves like list. |
| countryid | No | The Country ID as returned from listcountries. If provided, job vacancies of only the specified country will be retrieved. Otherwise, job vacancies of all countries will be retrieved. |
| stateid | No | The State ID as returned from liststates method. If provided, job vacancies of only the specified State will be retrieved. Otherwise, job vacancies of all States will be retrieved. |
| suburb | No | Can be used to narrow down the search results. If provided, job vacancies of only the specified suburb will be retrieved. Otherwise, job vacancies of all suburbs will be retrieved. |
| postcode | No | Can be used to look for job vacancies in a particular area. If provided, job vacancies of only the specified postal code will be retrieved. Otherwise, job vacancies of all areas will be retrieved. |
| localityid | No | Can be used to look for job vacancies in a particular locality. If provided, job vacancies of only the specified locality will be retrieved. Otherwise, job vacancies of all localities will be retrieved. You can either pass a localityid (in which case the country, state etc. will be ignored) or you can pass in the other fields which will attempt to resolve to a locality for the radius search. If no country id OR localityid is provided, the locality will be ignored and no attempt to resolve them will occur. |
| radiuskms | No | Can be used to look for job vacancies within a given distance from the user. If provided, job vacancies in localities that lie within the specified distance from the user will be retrieved. Otherwise, all job vacancies will be retrieved, irrespective of the distance from the user. |
| sectorid | No | Can be used to look for job vacancies in a particular sector (for example, 'Accountancy' or 'Software Development'). If provided, job vacancies of only the specified sector will be retrieved. Otherwise, job vacancies of all sectors will be retrieved. |
| subsectorid | No | Can be used to narrow down the list of job vacancies within a given sector (for example, to look for only 'Account Officer' or 'Java Programmers' vacancies. A subsectorid can be used only if a sectorid is used. If 'subsectorid' is provided, only job vacancies of the subsector will be retrieved. Otherwise, all job vacancies within the specified sector will be displayed. |
| page | No | Which page of the results to display. Defaults to page 1 (first page), if not specified. |

Output response for search is the same as [List Vacancies](#list-vacancies)
