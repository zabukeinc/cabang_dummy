# cabang_dummy


<b>a. Install apps</b> <br>
You need to run MySQL first before you run this apps.
<ul>
  <li>npm install</li>
  <li>npm run build</li>
  <li>npm i -g npx</li>
  <li>npx sequelize-cli db:create</li>
  <li>npm run dev</li>
</ul>

<b>b. Endpoint </b> <br>
Get all data cabang (GET)
<i>http://localhost:3000/api/branch</i>

Get specific data cabang (GET) by name or by id
<i>http://localhost:3000/api/branch/:id</i>
<br>
Examples <br>
<i>http://localhost:3000/api/branch/79</i>
<i>http://localhost:3000/api/branch/branch_name</i>
Insert data cabang (POST)
parameter: body
<i>http://localhost:3000/api/branch/</i>

Update data cabang (PUT)
<i>http://localhost:3000/api/branch/:id</i>

Delete data cabang (DELETE)
<i>http://localhost:3000/api/branch/:id</i>
