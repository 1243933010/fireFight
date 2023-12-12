

const state = {
  stepList: [
    {
      title: "需求单位",
      isInput: false,
      isActive: true
    }
  ],
  formInfo: {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input11: "",
    input12: "",
  }
}

const mutations = {
  CHANGE_STEPLIST: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    // if (state.hasOwnProperty(key)) {
    //   state[key] = value
    // }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
}

