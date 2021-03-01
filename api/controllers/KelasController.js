/**
 * KelasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

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
        )
        return result2 ? res.json({status: 200, data: result2}) : res.json({status:400, msg: 'Code Kelas Gagal Digenerate'});
      }else{
         res.json({status:400, msg: 'Input Data Gagal'});
      }
    } catch (e) {
      return res.serverError(e);
    }
  }

};

