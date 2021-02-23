/**
 * Guru.js
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
    kode_guru: {
      type: 'string',
      unique: true,
    },
    nama_guru: {
      type: 'string',
      required: true,
    },
    jenis_kelamin: {
      type: 'string',
      enum: ['Laki-laki', 'Perempuan'],
      required: true,
    },
    notelp_guru: {
      type: 'string',
      required: true,
    },
    agama: {
      type: 'string',
      enum: ['hindu', 'islam', 'budha', 'kristen', 'khatolik', 'konghuchu'],
      required: true,
    },
    alamat_guru: {
      type: 'string',
      required: true,
    },
    tempat_lahir_guru: {
      type: 'string',
      required: true,
    },
    tanggal_lahir_guru: {
      type: 'string',
      columnType: 'datetime',
      required: true,
    },
    foto_guru: {
      type: 'string',
    },
    status: {
      type: 'string',
      enum: ['admin', 'wali'],
      defaultsTo: 'wali'
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
    mata_pelajarans: {
      collection: 'MataPelajaran',
      via: 'gurus',
      through: 'MataPelajaranGuru',
    },

  },

};

