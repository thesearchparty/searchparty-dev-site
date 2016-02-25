---
layout: api-page
title: Filters
permalink: /documentation/api/filters/
api_menu: yes
---

### Countries

<table class="table table-striped">
  <tbody><tr>
    <td>URL</td>
    <td><code>http://api.tempurer.com/services/filters.svc/listcountries</code></td>
  </tr>
    <tr>
    <td>Methods Supported</td>
    <td>GET</td>
  </tr>
      <tr>
    <td>Description</td>
    <td>Retrieve a list of all countries.</td>
  </tr>
</tbody>
</table>

```
   [
       {
            "Code": "AF ",
            "CurrencyCode": "AFN",
            "CurrencyMarkup": "?",
            "Id": 1,
            "Name": "Afghanistan"
        }, 
        {
            "Code": "AL ",
            "CurrencyCode": "ALL",
            "CurrencyMarkup": "Lek",
            "Id": 2,
            "Name": "Albania"
        }, 
        {
            "Code": "DZ ",
            "CurrencyCode": "DZD",
            "CurrencyMarkup": "?.?",
            "Id": 8,
            "Name": "Algeria"
        }, 
        {
            "Code": "AS ",
            "CurrencyCode": "USD",
            "CurrencyMarkup": "$",
            "Id": 9,
            "Name": "American Samoa"
        }, 
        {
            "Code": "AD ",
            "CurrencyCode": "EUR",
            "CurrencyMarkup": "€",
            "Id": 10,
            "Name": "Andorra"
        }
    ..
    ...

```

* * *

### Locality Best Match

<table class="table table-striped">
  <tbody><tr>
    <td>URL</td>
    <td><code>http://api.tempurer.com/services/filters.svc/localitybestmatch</code></td>
  </tr>
    <tr>
    <td>Methods Supported</td>
    <td>GET</td>
  </tr>
      <tr>
    <td>Description</td>
    <td>Tries to find a best match locality for the location radius search.</td>
  </tr>
</tbody></table>

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
            <td>lco (Country)</td>
            <td>Yes</td>
            <td>The system will try to find a best-match locality for the specified country.</td>
            </tr>
            <tr>
            <td>lst (State)</td>
            <td>No</td>
            <td>The system will try to find a best-match locality for the specified country, within the specified State.</td>
            </tr>
            <tr>
            <td>lsu (Suburb)</td>
            <td>No</td>
            <td>The system will try to find a best-match locality for the specified country, within the specified suburb.</td>
            </tr>
            <tr>
            <td>lpo (Postcode)</td>
            <td>No</td>
            <td>The system will try to find a best-match locality for the specified country, within the specified postal code area.</td>
        </tr>
    </tbody>
</table>

```
    {
        "City": "Geelong",
        "CountryId": 6,
        "Id": "dd4f7df3-9af0-e011-929d-842b2b6577a5",
        "LocationLatLong": "-38.1473,144.361",
        "LocationShort": "Geelong, VIC 3220, Australia",
        "Postcode": "3220",
        "State": "Victoria",
        "StateId": 2
    }

```

* * *

### States

<table class="table table-striped">
      <tbody>
        <tr>
        <td>URL</td>
        <td><code>http://api.tempurer.com/services/filters.svc/liststates</code></td>
      </tr>
        <tr>
        <td>Methods Supported</td>
        <td>GET</td>
      </tr>
          <tr>
        <td>Description</td>
        <td>Retrieve a list of all states in given country.</td>
      </tr>
    </tbody>
</table>

#### Parameters

`http://api.tempurer.com/services/filters.svc/liststates/{COUNTRYID}`

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
        <td>countryId</td>
        <td>Yes</td>
        <td>The system will retrieve all the States in the specified country.</td>
    </tr>
    </tbody>
</table>

```
    [
        {
            "CountryId": 6,
            "Id": 3,
            "ShortTitle": "ACT",
            "Title": "Australian Capital Territory"
        }, 
        {
            "CountryId": 6,
            "Id": 1,
            "ShortTitle": "NSW",
            "Title": "New South Wales"
        }, 
        {
            "CountryId": 6,
            "Id": 8,
            "ShortTitle": "NT",
            "Title": "Northern Territory"
        }
    ..
    ...

```

* * *

### Sectors

<table class="table table-striped">
  <tbody><tr>
    <td>URL</td>
    <td><code>http://api.tempurer.com/services/filters.svc/listsectors</code></td>
  </tr>
    <tr>
    <td>Methods Supported</td>
    <td>GET</td>
  </tr>
      <tr>
    <td>Description</td>
    <td>Retrieve a list of all top level sectors.</td>
  </tr>
</tbody></table>

```
   {
    [{
        "Id": 1,
        "Name": "Accounting"
    }, {
        "Id": 2,
        "Name": "Administration & Office Support"
    }, {
        "Id": 3,
        "Name": "Advertising, Arts & Media"
    }, {
        "Id": 4,
        "Name": "Banking & Financial Services"
    }, {
        "Id": 5,
        "Name": "Call Centre & Customer Services"
    }, {
        "Id": 6,
        "Name": "Community Services & Development"
    }
    ..
    ...
   }

```

* * *

### Sub-Sectors

<table class="table table-striped">
  <tbody><tr>
    <td>URL</td>
    <td><code>http://api.tempurer.com/services/filters.svc/listsubsectors/</code></td>
  </tr>
    <tr>
    <td>Methods Supported</td>
    <td>GET</td>
  </tr>
      <tr>
    <td>Description</td>
    <td>Retrieve a list of all the subsectors of a specific sector.</td>
  </tr>
</tbody></table>

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
        <td>sectorid</td>
        <td>Yes</td>
        <td>The system will retrieve all the subsectors of the specified sector.</td>
    </tr>
    </tbody>
</table>

```
   {
    [
        {
        "Id": 46,
        "Name": "Account & Relationship Management"
        }, {
            "Id": 47,
            "Name": "Analysis & Reporting"
        }, {
            "Id": 48,
            "Name": "Banking - Business"
        }, {
            "Id": 49,
            "Name": "Banking - Corporate & Institutional"
        }, {
            "Id": 50,
            "Name": "Banking - Retail\/Branch"
        }, {
    ..
    ...
   }

```
