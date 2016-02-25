---
layout: api-page
title: Candidate Certifications
permalink: /documentation/api/candidate-certifications/
api_menu: yes
---

### Overview

<table class="table table-striped">
    <tbody><tr>
        <td>URL</td>
        <td><code>https://api.thesearchparty.com/1.0/Certifications</code></td>
    </tr>
    <tr>
        <td>Methods Supported</td>
        <td>GET, POST, DELETE</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            Allows you to retrieve Candidate Certifications by their Candidate ID (GUID)
            <br>
            Allows you to create a new Candidate Certification
            <br>
            Allows you to update an existing Candidate Certification
            <br>Allows you to delete a Candidate Certification
        </td>
    </tr>
    </tbody>
</table>

### GET Certification(s)

The GET method supports retrieving Certification(s) for a given Candidate

To retrieve Certification(s) simply pass in Candidate ID of the Candidate in the query string

`https://api.thesearchparty.com/1.0/publications?candidateid={CandidateID}`

```
[
    {
        "Id": "85be46db-cbad-e411-8255-00232485f033",
        "CandidateId": "7868a07e-d1f3-e011-929d-842b2b6577a5",
        "CertificationId": "d22cf76b-382f-e411-befa-50465dda7823",
        "CertificationTitle": "MCSA, Solutions Associate",
        "DateGained": "2019-11-20T00:00:00",
        "DateValidTo": "2022-11-21T00:00:00",
        "CertifyingBody": "Microsoft",
        "Title": "",
        "Limitations": "",
        "AdditionalInformation1": "Additional info for my certificate",
        "AdditionalInformation2": "Some more additional info",
        "Grade": "1"
    }
]

```

* * *

### POST Certification

The POST method supports updating or creating Certification. The only difference for an update and a create is the presence of ‘Id’ field. If this is present then update is attempted.

#### New Publication

```

    {
        "CandidateId": "7868a07e-d1f3-e011-929d-842b2b6577a5",
        "CertificationId": "d22cf76b-382f-e411-befa-50465dda7823",
        "CertificationTitle": "MCSA, Solutions Associate",
        "DateGained": "2019-11-20T00:00:00",
        "DateValidTo": "2022-11-21T00:00:00",
        "CertifyingBody": "Microsoft",
        "Title": "",
        "Limitations": "",
        "AdditionalInformation1": "Additional info for my certificate",
        "AdditionalInformation2": "Some more additional info",
        "Grade": "1"
    }

```

#### Update Publication

```
    {
        "Id": "85be46db-cbad-e411-8255-00232485f033",
        "CandidateId": "7868a07e-d1f3-e011-929d-842b2b6577a5",
        "CertificationId": "d22cf76b-382f-e411-befa-50465dda7823",
        "CertificationTitle": "MCSA, Solutions Associate",
        "DateGained": "2019-11-20T00:00:00",
        "DateValidTo": "2022-11-21T00:00:00",
        "CertifyingBody": "Microsoft",
        "Title": "",
        "Limitations": "",
        "AdditionalInformation1": "Additional info for my certificate",
        "AdditionalInformation2": "Some more additional info",
        "Grade": "1"
    }

```

* * *

### DELETE Certification

Delete Certification by ID

`https://api.thesearchparty.com/1.0/certifications/{ID}`
