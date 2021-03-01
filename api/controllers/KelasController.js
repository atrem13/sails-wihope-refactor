/**
 * KelasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { update } = require("./JurusanController");

module.exports = {
  async create(req, res){
    try {
      let params = req.allParams();
      let attributes = {};
      if(params.nama_kelas){
        attributes.nama_kelas = params.nama_kelas;
      }
      if(params.tingkat_id){
        attributes.tingkat_id = params.tingkat_id;
      }
      if(params.jurusan_id){
        attributes.jurusan_id = params.jurusan_id;
      }
      let result = await Kelas.create(attributes).fetch();
      if(result){
        let kode_kelas = await sails.helpers.kodeKelasGenerator.with({kelas_id: result.id});
        let result2 = await Kelas.updateOne(
          {
            id: result.id
          }
        ).set(
          {
            kode_kelas: kode_kelas,
            updatedAt: Date.now()
          }
        );
        return result2 ? res.json({status: 200, data: result2}) : res.json({status:400, msg: 'Code Kelas Gagal Digenerate'});
      }else{
         res.json({status:400, msg: 'Input Data Gagal'});
      }
    } catch (e) {
      return res.serverError(e);
    }
  },

  async find(req, res){
    try {
      let result = await Kelas.find().populate('tingkat_id').populate('jurusan_id');
      return result.length ? res.json({status: 200, data: result}) : res.json({status: 404, msg: 'Tabel Kosong'})
    } catch (e) {
      return res.serverError(e);
    }
  },

  async findOne(req, res){
    try {
      let params = req.allParams();
      let result = await Kelas.findOne({id: params.id}).populate('tingkat_id').populate('jurusan_id');
      return result ? res.json({status: 200, data: result}) : res.json({status:404, msg: 'Data Tidak Ditemukan'});
    } catch (e) {
      return res.serverError(e);
    }
  },

  async update(req, res){
    try {
      let params = req.allParams();
      let attributes = {updatedAt: Date.now(),};
      if(params.nama_kelas){
        attributes.nama_kelas = params.nama_kelas;
      }
      if(params.tingkat_id){
        attributes.tingkat_id = params.tingkat_id;
      }
      if(params.jurusan_id){
        attributes.jurusan_id = params.jurusan_id;
      }
      let result = await Kelas.updateOne(
        {
          id: params.id
        }
      ).set(attributes);
      return result ? res.json({status: 200, data: result}) :  res.json({status: 400, msg: 'Update Gagal'});
    } catch (e) {
      return res.serverError(e);
    }
  },

  async destroy(req, res){
    try {
      let params = req.allParams();
      let result = await Kelas.destroyOne({id: params.id});
      return result ? res.json({status: 200, data: result}) : res.json({status:400, msg: 'Delete Gagal'});
    } catch (e) {
      return res.serverError(e);
    }
  },




};

