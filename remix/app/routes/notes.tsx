import { redirect } from "@remix-run/node";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import newNoteStyles from "~/components/NewNote.css";
import { getStoredNotes, storeNotes } from "~/data/notes";
import NoteList, { links as noteListLink } from "~/components/NoteList";
import { useLoaderData } from "@remix-run/react";

export default function NotesPage(): JSX.Element {
  const notes = useLoaderData();

  return (
    <main>
      <h1>
        <NewNote />
        <NoteList notes={notes} />
      </h1>
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}

export async function action({ request }: any) {
  const formData = await request.formData();
  /* const noteData = {
    title: formData.get("title"),
    content: formData.get("content"), */
  const noteData = Object.fromEntries(formData);
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  return redirect("/notes");
}

export function links() {
  return [...newNoteLinks(), ...noteListLink()];
}
