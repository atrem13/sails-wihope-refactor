/**
 * RapotController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  async create(req, res){
    try{
      let params = req.allParams();
      let attributes = {};
      if(params.nama_rapot){
        attributes.nama_rapot = params.nama_rapot;
        attributes.kode_rapot = attributes.nama_rapot.split(' ').map(el=> el[0]).join('');
        let result = await Rapot.create(attributes).fetch();
        return result ? res.json({status: 200, data: result}) :  res.json({status: 400, msg: 'Input Data Gagal'});
      }else{
        return res.json({status: 400, msg: 'Input Kosong'});
      }
    }catch(e){
      return res.serverError(e);
    }
  },

  async find(req, res){
    try{
      let result = await Rapot.find();
      return result.length ? res.json({status: 200, data: result}) : res.json({status: 404, msg: 'Tabel Kosong'});
    }catch(e){
      return res.serverError(e);
    }
  },

  async findOne(req, res){
    try{
      let params = req.allParams();
      let result = await Rapot.findOne({id: params.id});
      return result ? res.json({status: 200, data: result}) : res.json({status: 404, msg: 'Data Tidak Ditemukan'});
    }catch(e){
      return res.serverError(e);
    }
  },

  async update(req, res){
    try{
      let params = req.allParams();
      let attributes = {updatedAt: Date.now(),};
      if(params.nama_rapot){
        attributes.nama_rapot = params.nama_rapot;
        attributes.kode_rapot = attributes.nama_rapot.split(' ').map(el => el[0]).join('');
        let result = await Rapot.updateOne({id: params.id}).set(attributes);
        return result ? res.json({status: 200, data: result}) : res.json({status: 400, msg: 'Update Gagal'});
      }
    }catch(e){
      return res.serverError(e);
    }
  },

  async destroy(req, res){
    try{
      let params = req.allParams();
      let result = await Rapot.destroyOne({id: params.id});
      return result ? res.json({status: 200, data: result}) : res.json({status: 400, msg: 'Delete Gagal'});
    }catch(e){
      return res.serverError(e);
    }
  }

};

