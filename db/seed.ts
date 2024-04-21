import { db, Todos, Categories } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Categories).values([
		{ id: 0, category: 'General' },
		{ id: 1, category: 'Learning' },
		{ id: 2, category: 'Projects' },
		{ id: 3, category: 'Articles' },
		{ id: 4, category: 'Events' },
	]),
	await db.insert(Todos).values([
		{ id: 0, task: 'Dummy text number one', catId: 0, done: false },
		{ id: 1, task: 'Dummy text number two', catId: 2, done: false },
	])
}
