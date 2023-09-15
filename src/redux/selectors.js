import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = ({ contacts }) => {
    return contacts.items;
}

export const selectFilter = state => state.filters;

export const selectFilteredContacts = createSelector(selectContacts, selectFilter, (contacts, {filter}) => {
    const selectedContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter)
    })
    return selectedContacts
 })

export const selectIsLoading = state => state.contacts.isLoading

export const selectError = state => state.contacts.error

export const selectLoginError = state => state.auth.error

export const selectAuth = state => state.auth.auth

export const selectToken = state => state.auth.token

export const selectUser = state => state.auth.user.name

