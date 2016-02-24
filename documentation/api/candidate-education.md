---
layout: api-page
title: Candidate Education
permalink: /documentation/api/candidate-education/
api_menu: yes
---

### Overview

| URL | `https://api.thesearchparty.com/1.0/education` |
| Methods Supported | GET , POST, DELETE |
| Description | Allows you to retrieve a candidate education by their ID (GUID)
Allows you to update an existing candidate education
Allows you to delete candidate education record |

### GET Education(s)

The GET method supports retrieving education(s) by Candidate ID

`https://api.thesearchparty.com/1.0/education?candidateid={CandidateID}`

```
[
    {
        "Id": "8d68a07e-d1f3-e011-929d-842b2b6577a5",
        "CandidateId": "7868a07e-d1f3-e011-929d-842b2b6577a5",
        "EducationType": null,
        "EducationTypeId": "9cad8cb9-b7f3-e011-929d-842b2b6577a5",
        "EducationTitle": "Physics",
        "City": "",
        "CountryId": null,
        "CountryText": null,
        "Institution": "Sree Naryana College",
        "Grade": "82%",
        "AwardType": "Bachelors Degree",
        "StartDate": "1993-01-01T00:00:00",
        "EndDate": "1996-01-01T00:00:00"
    },
    {
        "Id": "8e68a07e-d1f3-e011-929d-842b2b6577a5",
        "CandidateId": "7868a07e-d1f3-e011-929d-842b2b6577a5",
        "EducationType": null,
        "EducationTypeId": "9dad8cb9-b7f3-e011-929d-842b2b6577a5",
        "EducationTitle": "",
        "City": "",
        "CountryId": null,
        "CountryText": null,
        "Institution": "Centre of Excellence Lead",
        "Grade": "",
        "AwardType": "",
        "StartDate": "2009-06-01T00:00:00",
        "EndDate": null
    },

```

* * *

### POST Education

The POST method supports updating or creating an Education record. The only difference for an update and a create is the presence of ‘Id’ field. If this is present then update is attempted.

#### New Education

```
{
        "CandidateId": "7868a07e-d1f3-e011-929d-842b2b6577a5",
        "EducationType": null,
        "EducationTypeId": "9cad8cb9-b7f3-e011-929d-842b2b6577a5",
        "EducationTitle": "Physics",
        "City": "",
        "CountryId": null,
        "CountryText": null,
        "Institution": "Sree Naryana College",
        "Grade": "82%",
        "AwardType": "Bachelors Degree",
        "StartDate": "1993-01-01T00:00:00",
        "EndDate": "1996-01-01T00:00:00"
}

```

#### Update Publication

```
{
        "Id": "85be46db-cbad-e411-8255-00232485f033",
        "CandidateId": "7868a07e-d1f3-e011-929d-842b2b6577a5",
        "EducationType": null,
        "EducationTypeId": "9cad8cb9-b7f3-e011-929d-842b2b6577a5",
        "EducationTitle": "Physics",
        "City": "",
        "CountryId": null,
        "CountryText": null,
        "Institution": "Sree Naryana College",
        "Grade": "82%",
        "AwardType": "Bachelors Degree",
        "StartDate": "1993-01-01T00:00:00",
        "EndDate": "1996-01-01T00:00:00"
}

```

* * *

### DELETE Education

Delete Education row by Id

`https://api.thesearchparty.com/1.0/education/{ID}`
