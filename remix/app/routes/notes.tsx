import { redirect } from "@remix-run/node";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import newNoteStyles from "~/components/NewNote.css";
import { getStoredNotes, storeNotes } from "~/data/notes";

export default function NotesPage(): JSX.Element {
  return (
    <main>
      <h1>
        <NewNote />
      </h1>
    </main>
  );
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
  return redirect("/notes");
}

export function links() {
  return [...newNoteLinks()];
}
