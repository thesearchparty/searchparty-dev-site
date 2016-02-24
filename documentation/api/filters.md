---
layout: api-page
title: Filters
permalink: /documentation/api/filters/
api_menu: yes
---

# Filters

### Countries

| URL | `http://api.tempurer.com/services/filters.svc/listcountries` |
| Methods Supported | GET |
| Description | Retrieve a list of all countries. |

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

| URL | `http://api.tempurer.com/services/filters.svc/localitybestmatch` |
| Methods Supported | GET |
| Description | Tries to find a best match locality for the location radius search. |

#### Parameters

| Name | Mandatory | Description |
| --- | --- | --- |
| lco (Country) | Yes | The system will try to find a best-match locality for the specified country. |
| lst (State) | No | The system will try to find a best-match locality for the specified country, within the specified State. |
| lsu (Suburb) | No | The system will try to find a best-match locality for the specified country, within the specified suburb. |
| lpo (Postcode) | No | The system will try to find a best-match locality for the specified country, within the specified postal code area. |

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

| URL | `http://api.tempurer.com/services/filters.svc/liststates` |
| Methods Supported | GET |
| Description | Retrieve a list of all states in given country. |

#### Parameters

`http://api.tempurer.com/services/filters.svc/liststates/{COUNTRYID}`

| Name | Mandatory | Description |
| --- | --- | --- |
| countryId | Yes | The system will retrieve all the States in the specified country. |

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

| URL | `http://api.tempurer.com/services/filters.svc/listsectors` |
| Methods Supported | GET |
| Description | Retrieve a list of all top level sectors. |

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

| URL | `http://api.tempurer.com/services/filters.svc/listsubsectors/` |
| Methods Supported | GET |
| Description | Retrieve a list of all the subsectors of a specific sector. |

#### Parameters

| Name | Mandatory | Description |
| --- | --- | --- |
| sectorid | Yes | The system will retrieve all the subsectors of the specified sector. |

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
