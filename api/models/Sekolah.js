/**
 * Sekolah.js
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
    nama_sekolah: {
      type: 'string',
      required: true,
    },
    alamat_sekolah: {
      type: 'string',
    },
    kecamatan: {
      type: 'string'
    },
    kota: {
      type: 'string'
    },
    notelp_sekolah: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    website: {
      type: 'string',
    },
    logo_Sekolah: {
      type: 'string',
    },
    website: {
      type: 'string',
    },
    icon_sekolah: {
      type: 'string',
    },
    jenjang_pendidikan: {
      type: 'string',
    },



    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

