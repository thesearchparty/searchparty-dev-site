---
layout: api-page
title: Candidate Publications
permalink: /documentation/api/candidate-publications/
api_menu: yes
---

### Overview

| URL | `https://api.thesearchparty.com/1.0/publications` |
| Methods Supported | GET , POST, DELETE |
| Description | Allows you to retrieve candidate publications by their candidate ID (GUID)
Allows you to create a new candidate publication
Allows you to update an existing candidate publication
Allows you to delete a candidate publication |

### GET Publication(s)

The GET method supports retrieving publication(s) for a given Candidate

To retrieve publication(s) simply pass in Candidate ID of the Candidate in the query string

`https://api.thesearchparty.com/1.0/publications?candidateid={CandidateID}`

```
  [
    {
        "CompanyId": "b50d52d9-c4a6-e011-ba7e-842b2b6577a5",
        "CandidateId": "77c090a1-ad9d-e311-82c0-50465d3e4329",
        "Id": "f5ffd7c3-f6a3-e311-82c3-50465d3e4329",
        "SkillName": "Excel",
        "LevelId": 3,
        "Years": 1
    },
    {
        "CompanyId": "b50d52d9-c4a6-e011-ba7e-842b2b6577a5",
        "CandidateId": "77c090a1-ad9d-e311-82c0-50465d3e4329",
        "Id": "02385e4a-0da4-e311-82c3-50465d3e4329",
        "SkillName": "Public Speaking",
        "LevelId": 2,
        "Years": 4
    }
]

```

* * *

### POST Publication

The POST method supports updating or creating publication. The only difference for an update and a create is the presence of ‘Id’ field. If this is present then update is attempted.

#### New Publication

```

{
    "CandidateId": "7868a07e-d1f3-e011-929d-842b2b6577a5",
    "Type": "Article",
    "Title": "A detailed analysis of Data Science",
    "Description": "This is a description of the article",
    "PublicationYear": 1999
}

```

#### Update Publication

```
{
    "Id": "f5ffd7c3-f6a3-e311-82c3-50465d3e4329",
    "CandidateId": "7868a07e-d1f3-e011-929d-842b2b6577a5",
    "Type": "Article",
    "Title": "A detailed analysis of Data Science",
    "Description": "This is a description of the article",
    "PublicationYear": 1999
}

```

* * *

### DELETE Publication

Delete Publication by Candidate Id & Publication Id

`https://api.thesearchparty.com/1.0/publications?candidateId={CANDIDATEID}&publicationId={PUBLICATIONID}`
