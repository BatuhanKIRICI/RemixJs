import { redirect } from "@remix-run/node";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import newNoteStyles from "~/components/NewNote.css";
import { getStoredNotes, storeNotes } from "~/data/notes";
import NoteList, { links as noteListLink } from "~/components/NoteList";
import { useLoaderData, Link } from "@remix-run/react";

export default function NotesPage() {
  const notes = useLoaderData();
  // const data = useActionData();

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
  if (!notes || notes.length === 0) {
    throw json(
      { message: "Could not find any notes." },
      { status: 404, statusText: "Not Found" }
    );
  }
  return notes;
}

export async function action({ request }) {
  const formData = await request.formData();
  /* const noteData = {
    title: formData.get("title"),
    content: formData.get("content"), */
  const noteData = Object.fromEntries(formData);

  if (noteData.title.trim().length < 5) {
    return { message: "Invalid title - must be at least 5 characters long." };
  }

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

export function CatchBoundary() {
  const caughtResponse = useCatch();

  const message = caughtResponse.data?.message || "Data not found.";

  return (
    <main>
      <NewNote />
      <p className="info-message">{message}</p>
    </main>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <main className="error">
      <h1>An error related to your notes!</h1>
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">safety</Link>!
      </p>
    </main>
  );
}
