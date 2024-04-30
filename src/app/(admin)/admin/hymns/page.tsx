// export function Page() {
//   // const dialog =
//
//   return (
//     <>
//       <button slot="actions" className="btn btn-primary" onClick="hymn_add_dialog.showModal()">
//         <i className="fa fa-plus fa-lg mt-1"></i>
//         Add Hymn
//       </button>
//       <ul>
//         {hymns.length !== 0 &&
//           hymns.map(hymn => (
//             <a href="#">
//               <li className="flex items-center justify-between p-5 hover:bg-neutral-100">
//                 <h3 className="font-extrabold">{hymn.title}</h3>
//                 <div>
//                   <button className="hymn-action btn btn-warning">
//                     <i className="fa fa-pen" />
//                     Edit
//                   </button>
//                   <button
//                     data-hymn-id={hymn.id}
//                     className="hymn-action hymn-delete btn btn-error text-white ml-1"
//                   >
//                     <i className="fa fa-trash" />
//                     Delete
//                   </button>
//                 </div>
//               </li>
//               <hr />
//             </a>
//           ))}
//       </ul>
//       {hymns.length === 0 && (
//         <div className="h-full grid place-items-center text-neutral-500 py-6">No hymns added yet</div>
//       )}
//
//       <dialog id="hymn_add_dialog" className="modal">
//         <div className="modal-box w-[400px] pb-2">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//           </form>
//           <h3>Add New Hymn</h3>
//           <form method="post" className="flex flex-col items-stretch py-4">
//             <label className="form-control">
//               <div className="label">
//                 <span className="label-text">Title</span>
//               </div>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Amazing Grace"
//                 className="input input-bordered w-full"
//               />
//             </label>
//             <label className="form-control mt-2">
//               <div className="label">
//                 <span className="label-text">Lyrics</span>
//               </div>
//               <textarea
//                 className="textarea textarea-bordered"
//                 name="lyrics"
//                 placeholder="Amazing grace how sweet the sound\nthat saved a wretch like me!"
//                 rows="15"
//               ></textarea>
//             </label>
//             <button className="btn btn-primary w-28 min-h-12 h-12 mt-5 mx-auto">
//               <i className="fa fa-save"></i>
//               Save
//             </button>
//           </form>
//         </div>
//       </dialog>
//     </>
//   );
// }
//
// // <script>
// //   const actionButtons = document.querySelectorAll<HTMLButtonElement>('button.hymn-action');
// //   actionButtons.forEach(button => {
// //     button.addEventListener('click', event => {
// //       event.preventDefault();
// //     });
// //   });
// //
// //   const hymnDeleteButtons = document.querySelectorAll<HTMLButtonElement>('button.hymn-delete');
// //   hymnDeleteButtons.forEach(button => {
// //     button.addEventListener('click', async () => {
// //       const hymnId = button.getAttribute('data-hymn-id');
// //       if (!hymnId) {
// //         return;
// //       }
// //
// //       const data = new FormData();
// //       data.append('hymnId', hymnId);
// //
// //       console.debug(data);
// //       await fetch('', {
// //         method: 'DELETE',
// //         body: data,
// //       });
// //
// //       location.reload();
// //     });
// //   });
// // </script>
