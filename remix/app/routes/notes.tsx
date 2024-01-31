import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import newNoteStyles from "~/components/NewNote.css";

export default function NotesPage(): JSX.Element {
  return (
    <main>
      <h1>
        <NewNote />
      </h1>
    </main>
  );
}

export function action() {}

export function links() {
  return [...newNoteLinks()];
}
