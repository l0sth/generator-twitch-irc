## Database

This is a new feature, you can now create a collection and interact with it like any database. Your collections will be saved in your database directory.

### Insert, add or push elements

```bash
client.db.insert('collection', elements);
```

The elements can be an object or an array of object. The collection name will also be the file created in your database directory. You will have to use the same collection name to interact with it.

**Examples:**

```client.db.insert('monsters', [
 {name: "sphinx", mythology: "greek", eyes: 2, sex: "f", hobbies: ["riddles","sitting","being a wonder"]},
 {name: "hydra", mythology: "greek", eyes: 18, sex: "m", hobbies: ["coiling","terrorizing","growing"]},
 {name: "huldra", mythology: "norse", eyes: 2, sex: "f", hobbies: ["luring","terrorizing"]},
 {name: "cyclops", mythology: "greek", eyes: 1, sex: "m", hobbies: ["staring","terrorizing"]},
 {name: "fenrir", mythology: "norse", eyes: 2, sex: "m", hobbies: ["growing","god-killing"]},
 {name: "medusa",  mythology: "greek", eyes: 2, sex: "f", hobbies: ["coiling","staring"]}
]);```

```client.db.insert('monsters', {name: "HamoIzm", mythology: "amazigh", eyes: 2, sex: "m", hobbies: ["riddles","hunting"]});```

---

### Retrieve elements

```bash
client.db.where('collection', query);
```

Querying your collection is easy, you can search using an object or using operators:

**Examples:**

```client.db.where('monsters', {name: "HamoIzm"});```

```=> [{name: "HamoIzm", mythology: "amazigh", eyes: 2, sex: "m", hobbies: ["riddles","hunting"], cid:6}]```

--

```client.db.where('monsters', "@eyes >= 2");```

```=> [
        {name: "sphinx", mythology: "greek", eyes: 2, sex: "f", hobbies: ["riddles","sitting","being a wonder"], cid:0},
        {name: "hydra", mythology: "greek", eyes: 18, sex: "m", hobbies: ["coiling","terrorizing","growing"], cid:1},
        {name: "huldra", mythology: "norse", eyes: 2, sex: "f", hobbies: ["luring","terrorizing"], cid:2},
        {name: "fenrir", mythology: "norse", eyes: 2, sex: "m", hobbies: ["growing","god-killing"], cid:4},
        {name: "medusa",  mythology: "greek", eyes: 2, sex: "f", hobbies: ["coiling","staring"], cid:5},
        {name: "HamoIzm", mythology: "amazigh", eyes: 2, sex: "m", hobbies: ["riddles","hunting"], cid:6}
      ]```

--

```client.db.where('monsters', "(@eyes == 2 && @mythology == 'greek') || (@mythology == 'amazing')");```

```=> [
        {name: "sphinx", mythology: "greek", eyes: 2, sex: "f", hobbies: ["riddles","sitting","being a wonder"], cid:0},
        {name: "medusa",  mythology: "greek", eyes: 2, sex: "f", hobbies: ["coiling","staring"], cid:5},
        {name: "HamoIzm", mythology: "amazing", eyes: 2, sex: "m", hobbies: ["riddles","hunting"], cid:6}
      ]```

---

### Retrieve by cid

```bash
client.db.get('monsters', cid);
```

The cid is not an index in array, cid is related with addition.

**Example:**

```client.db.get('monsters', 3);```

```=> {name: "cyclops", mythology: "greek", eyes: 1, sex: "m", hobbies: ["staring","terrorizing"], cid:3}```

---

### List all elements in a collection

```bash
client.db.list('collection');
```

**Example:**

```client.db.list('monsters'); ```

---

### Update an element in a collection

```bash
client.db.update('collection', cid, object);
```

Update an element, it will add un-existed key and replace existed. (cid can't be changed)

**Example:**

```client.db.update('monsters', 5, {eyes: 3, food:"waloo"}); ```

```client.db.get(5); ```

```=> {name: "medusa",  mythology: "greek", eyes: 3, food:"waloo", sex: "f", hobbies: ["coiling","staring"], cid:5}```

---

### Replace an element

```bash
client.db.replace('collection', cid, object);
```

Replace an element with the same cid.

**Example:**

```client.db.replace('monsters', 6, {car: "Ferrari"}); ```

```client.db.get(6); ```

```=> {car: "Ferrari", cid:6}```

---

### Remove an element

```bash
client.db.remove('collection', cid);
```

Delete an item by cid.

**Example:**

```client.db.remove('monsters', 1); ```
