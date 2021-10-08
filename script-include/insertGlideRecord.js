function insertGlideRecord(GlideReference, field, value) {
    if (GlideReference.isValidField(field)) {
        GlideReference.setValue(field, value);
    }
}
