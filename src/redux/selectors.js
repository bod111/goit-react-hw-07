export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectNameFilter = (state) => state.filters.name;

export const selectVisibleContacts = (state) => {
  const contacts = selectContacts(state);
  console.log("selectVisibleContacts ~ contacts:", contacts);
  const nameFilter = selectNameFilter(state);

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};
