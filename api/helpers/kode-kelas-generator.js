module.exports = {

  friendlyName: 'Kode kelas generator',

  description: '',

  inputs: {
    kelas_id: {
      type: 'number',
      example: 5,
      required: true,
    }
  },

  exits: {
    success: {
      description: 'All done.',
      outputType: 'string',
    },

  },


  fn: async function (inputs, exits) {
    let id = (inputs.kelas_id < 10) ? `00${inputs.kelas_id}` : (inputs.kelas_id < 100) ? `0${inputs.kelas_id}` : inputs.kelas_id;
    let kode = `KLS${id}`;
    return exits.success(kode);


  }


};

