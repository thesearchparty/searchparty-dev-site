---
layout: api-page
title: Vancancies
permalink: /documentation/api/vacancies/
api_menu: yes
---

### GET Vacancy

<table class="table table-striped">
  <tbody><tr>
    <td>URL</td>
    <td><code>http://api.tempurer.com/services/vacancy.svc/get/{Id}</code></td>
  </tr>
    <tr>
    <td>Methods Supported</td>
    <td>GET</td>
  </tr>
      <tr>
    <td>Description</td>
    <td>Allows you to retrieve a vacancy by ID</td>
  </tr>
  </tbody>
</table>

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

<table class="table table-striped">
  <tbody><tr>
    <td>URL</td>
    <td><code>https://api.thesearchparty.com/services/vacancy.svc/list</code></td>
  </tr>
    <tr>
    <td>Methods Supported</td>
    <td>GET</td>
  </tr>
      <tr>
    <td>Description</td>
    <td>Allows you to retrieve a vacancy list</td>
  </tr>
</tbody>
</table>

#### Parameters

<table class="table table-striped">
    <thead>
    <tr>
    <th>Name</th>
    <th>Mandatory</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>page</td>
    <td>No</td>
    <td>Which page of the results to display. Defaults to page 1 (first page), if not specified.</td>
    </tr>
    <tr>
    <td>pagesize</td>
    <td>No</td>
    <td>The number of results to be displayed per page. Defaults to 10, if not specified.</td>
    </tr>
    </tbody>
</table>

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

<table class="table table-striped">
  <tbody><tr>
    <td>URL</td>
    <td><code>https://api.thesearchparty.com/services/vacancy.svc/search</code></td>
  </tr>
    <tr>
    <td>Methods Supported</td>
    <td>GET</td>
  </tr>
      <tr>
    <td>Description</td>
    <td>Allows searching of vacancy listings by fields defined below</td>
  </tr>
</tbody></table>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Parameters</th>
            <th>Mandatory</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>q</td>
            <td>No</td>
            <td>Performs a search based on a query term. If not supplied then behaves like list.</td>
        </tr>
        <tr>
            <td>countryid</td>
            <td>No</td>
            <td>The Country ID as returned from listcountries. If provided, job vacancies of only the specified country will be retrieved. Otherwise, job vacancies of all countries will be retrieved.</td>
        </tr>
        <tr>
            <td>stateid</td>
            <td>No</td>
            <td>The State ID as returned from liststates method. If provided, job vacancies of only the specified State will be retrieved. Otherwise, job vacancies of all States will be retrieved.</td>
        </tr>
        <tr>
            <td>suburb</td>
            <td>No</td>
            <td>Can be used to narrow down the search results. If provided, job vacancies of only the specified suburb will be retrieved. Otherwise, job vacancies of all suburbs will be retrieved.</td>
        </tr>
        <tr>
            <td>postcode</td>
            <td>No</td>
            <td>Can be used to look for job vacancies in a particular area. If provided, job vacancies of only the specified postal code will be retrieved. Otherwise, job vacancies of all areas will be retrieved.</td>
        </tr>
        <tr>
            <td>localityid</td>
            <td>No</td>
            <td>Can be used to look for job vacancies in a particular locality. If provided, job vacancies of only the specified locality will be retrieved. Otherwise, job vacancies of all localities will be retrieved.  You can either pass a localityid (in which case the country, state etc. will be ignored) or you can pass in the other fields which will attempt to resolve to a locality for the radius search. If no country id OR localityid is provided, the locality will be ignored and no attempt to resolve them will occur.</td>
        </tr>
        <tr>
            <td>radiuskms</td>
            <td>No</td>
            <td>Can be used to look for job vacancies within a given distance from the user. If provided, job vacancies in localities that lie within the specified distance from the user will be retrieved. Otherwise, all job vacancies will be retrieved, irrespective of the distance from the user.</td>
        </tr>
        <tr>
            <td>sectorid</td>
            <td>No</td>
            <td>Can be used to look for job vacancies in a particular sector (for example, 'Accountancy' or 'Software Development'). If provided, job vacancies of only the specified sector will be retrieved. Otherwise, job vacancies of all sectors will be retrieved.</td>
        </tr>
        <tr>
            <td>subsectorid</td>
            <td>No</td>
            <td>Can be used to narrow down the list of job vacancies within a given sector (for example, to look for only 'Account Officer' or 'Java Programmers' vacancies. A subsectorid can be used only if a sectorid is used. If 'subsectorid' is provided, only job vacancies of the subsector will be retrieved. Otherwise, all job vacancies within the specified sector will be displayed.</td>
        </tr>
        <tr>
            <td>page</td>
            <td>No</td>
            <td>Which page of the results to display. Defaults to page 1 (first page), if not specified.</td>
        </tr>
    </tbody>
</table>

Output response for search is the same as [List Vacancies](#list-vacancies)
