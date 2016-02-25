---
layout: api-page
title: Candidate Skills
permalink: /documentation/api/candidate-skills/
api_menu: yes
---

### Overview

<table class="table table-striped">
    <tbody><tr>
        <td>URL</td>
        <td><code>https://api.thesearchparty.com/1.0/skills</code></td>
    </tr>
    <tr>
        <td>Methods Supported</td>
        <td>GET , POST, DELETE</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            Allows you to retrieve a candidate by their ID (GUID)
            <br>
            Allows you to update an existing candidate
            <br>Allows you to create a new candidate</td>
    </tr>
</tbody></table>

### GET Skill(s)

The GET method supports retrieving skill(s) by Candidate ID

To retrieve skills simply pass in Candidate ID of the Candidate in the query string

`https://api.thesearchparty.com/1.0/skills?candidateid={CandidateID}`

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

### POST Skill

The POST method supports updating or creating a skill. The only difference for an update and a create is the presence of ‘Id’ field. If this is present then update is attempted.

### DELETE Skill

Delete skill by skill Id