# PRISMA
Prisma is an ORM (Object Relation Mapping, like Sequelize)

# USE  

We have a file, `prisma.schem` where we will put out db and our tables:

```
datasource db{
    provider = "postgresql" //This could also be mongoDB, MySQL, Sqlite, etc
    url = env("DATABASE_URL")
}

generator client {
    provider = "prisma-client-js"
}
//models are the tables
model Post {
    id Int @id @default(autoincrement())
    title String
    content String?
    published Boolean @default(false)
    author User? @relation(fields: [authorId], reference [id]) //fields points to which key from the current table (post) will be the foreign key and what references points to what that key would be on the other table (id)
    authorId Int?
}

model User{
    id Int @id @default(autoincrement())
    email String @unique
    name String?
    posts Post[]
}