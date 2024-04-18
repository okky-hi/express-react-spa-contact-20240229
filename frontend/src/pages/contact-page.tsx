import { Suspense, useState } from "react";
import { useParams } from 'react-router-dom';
import { requestGet } from "../api";
import { Contact } from "../type";

function ContactPage() {
  return (
    <>
      <h1>Contacts</h1>
      <ContactList/>
    </>
  );
}

function ContactList() {
  const [order, setOrder] = useState<string>("asc");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(25);
  const params = useParams();

  const handlePrevPageClick = () => {
    setPage((page) => page - 1);
  };

  const handleNextPageClick = () => {
    setPage((page) => page + 1);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit((limit) => Number(e.target.value));
  };

  const handleClick = () => {
    setOrder(order === "desc" ? "asc" : "desc");
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Contacts order={order} page={page} limit={limit}/>
      </Suspense>
      <button onClick={handlePrevPageClick}>前へ</button>
      <button onClick={handleNextPageClick}>次へ</button>
      <br />
      <br />
      <input type="number" value={limit} onChange={handleLimitChange} />
      <br />
      <br />
      <div>
        <button onClick={handleClick}>asc/desc</button>
      </div>
    </>
  );
}

function Contacts({ order, page, limit }: { order: string, page: number, limit: number }) {
  const contacts = requestGet<Contact[]>(`/contacts?order=${order}&page=${page}&limit=${limit}`);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <div style={{ color: "blue" }}>
            {contact.name} | {contact.email}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactPage;