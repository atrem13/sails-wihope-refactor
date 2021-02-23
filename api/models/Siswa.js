/**
 * Siswa.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
    },
    kode_siswa: {
      type: 'string',
      unique: true,
    },
    nama_siswa: {
      type: 'string',
      required: true,
    },
    jenis_kelamin: {
      type: 'string',
      enum: ['Laki-laki', 'Perempuan'],
      required: true,
    },
    notelp_siswa: {
      type: 'string',
      required: true,
    },
    agama: {
      type: 'string',
      enum: ['hindu', 'islam', 'budha', 'kristen', 'khatolik', 'konghuchu'],
      required: true,
    },
    alamat_siswa: {
      type: 'string',
      required: true,
    },
    tempat_lahir_siswa: {
      type: 'string',
      required: true,
    },
    tanggal_lahir_siswa: {
      type: 'string',
      columnType: 'datetime',
      required: true,
    },
    foto_siswa: {
      type: 'string',
    },
    status: {
      type: 'boolean',
      defaultsTo: true
    },
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
      encrypt: true,
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    kelas_id: {
      model: 'kelas',
    },

  },

};

