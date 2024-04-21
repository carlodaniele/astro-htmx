import { defineDb, defineTable, column } from 'astro:db';

const Todos = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    task: column.text(),
    catId: column.number({ references: () => Categories.columns.id }),
    done: column.boolean(),
  }
})

const Categories = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    category: column.text(),
  }
})
// https://astro.build/db/config
export default defineDb({
  tables: { Todos, Categories }
});