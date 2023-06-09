export default {
  async addToCollections(context, data) {
    const item = {
      input: data.input,
      output: data.output,
      diffHtml: data.diffHtml,
      id: data.id,
    };

    context.commit("addToCollections", {
      ...item,
    });
  },
  async removeFromCollections(context, data) {
    context.commit("removeFromCollections", data);
  },
};
