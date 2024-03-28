// 変更前のコード
// 変更前のコードでは、ContactListEeffectコンポーネント内でuseEffectフックを使用して、非同期のAPIリクエストを行い、連絡先データを取得しています。この方法では、コンポーネントがマウントされた後にデータを読み込み、読み込みが完了するまで"loading..."と表示されます。
// import { Suspense, useEffect, useState } from "react";
// import { getContacts } from "./api";
// import { Contact } from "./type";

// function App() {
//   return (
//     <>
//       <h1>Contacts</h1>
//       <ContactListEeffect />
//     </>
//   );
// }

// function ContactListEeffect() {
//   const [contacts, setContacts] = useState<Contact[]>();
//   const [order, setOrder] = useState<string>();
//   const [page, setPage] = useState<number>(1);
//   const [limit, setLimit] = useState<number>(25);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       const ret = await fetch(
//         `http://localhost:8000/contacts?order=${order}&page=${page}&limit=${limit}`
//       );
//       if (!ret.ok) {
//         throw new Error("通信失敗");
//       }
//       const contacts = await ret.json();
//       setContacts(contacts);
//     };

//     fetchContacts();
//   }, [order, page, limit]);

//   const handlePrevPageClick = () => {
//     setPage((page) => page - 1);
//   };

//   const handleNextPageClick = () => {
//     setPage((page) => page + 1);
//   };

//   const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLimit((limit) => Number(e.target.value));
//   };

//   const handleClick = () => {
//     setOrder(order === "desc" ? "asc" : "desc");
//   };

//   return (
//     <>
//       {contacts ? (
//         <>
//           <Contacts contacts={contacts} />
//           <button onClick={handlePrevPageClick}>前へ</button>
//           <button onClick={handleNextPageClick}>次へ</button>
//           <br />
//           <br />
//           <input type="number" value={limit} onChange={handleLimitChange} />
//           <br />
//           <br />
//           <div>
//             <button onClick={handleClick}>asc/desc</button>
//           </div>
//         </>
//       ) : (
//         "loading..."
//       )}
//     </>
//   );
// }

// function Contacts({ contacts }: { contacts: Contact[] }) {
//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <li key={contact.id}>
//           <div style={{ color: "blue" }}>
//             {contact.name} | {contact.email}
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default App;

// 変更後のコード
// 変更後のコードでは、Suspenseコンポーネントを導入しています。SuspenseコンポーネントはReactの機能の一つで、非同期操作（例えばデータの読み込み）を扱う際に便利です。Suspenseを使用することで、読み込み中の状態をより明確に制御でき、読み込み中に表示するコンテンツ（この場合は<div>Loading...</div>）を簡単に指定できます。
// ContactListSuspenseコンポーネントでは、非同期のデータ読み込み処理は同じように行われますが、Suspenseコンポーネントによってラップされているため、読み込みが完了するまでSuspenseのfallbackプロパティで指定されたコンテンツが表示されます。これにより、読み込み中の表示をより柔軟に制御できます。

import { Suspense, useState } from "react";
import { Contact } from "./type";

function App() {
  return (
    <>
      <h1>Contacts</h1>
      <ContactListSuspense />
    </>
  );
}

function ContactListSuspense() {
  const [contacts, setContacts] = useState<Contact[]>();
  const [order, setOrder] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(25);

  // const fetchContacts = async () => {
  //   const ret = await fetch(
  //     `http://localhost:8000/contacts?order=${order}&page=${page}&limit=${limit}`
  //   );
  //   if (!ret.ok) {
  //     throw new Error("通信失敗");
  //   }
  //   const contacts = await ret.json();
  //   setContacts(contacts);
  // };

  const fetchContacts = async () => {
    const ret = await fetch(
      `http://localhost:8000/contacts?order=${order}&page=${page}&limit=${limit}`
    );
    if (!ret.ok) {
      throw new Error("通信失敗");
    }
    const contacts = await ret.json();
    setContacts(contacts);
  };

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
      {contacts ? (
        <>
          <Contacts contacts={contacts} />
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
      ) : (
        "loading..."
      )}
    </>
  );
}

function Contacts({ contacts }: { contacts: Contact[] }) {
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

export default App;

// まとめ
// 主な変更点は、非同期データの読み込みを扱うためにSuspenseコンポーネントを導入したことです。これにより、読み込み中の状態をより明確に制御し、ユーザーに対してより良いフィードバックを提供できるようになります。
