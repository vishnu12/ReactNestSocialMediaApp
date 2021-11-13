import * as path from 'path'

export const filename=(req, file:Express.Multer.File, cb:(error: Error, filename: string) => void)=>{
    let datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
}

export const fileFilter=(req,file:Express.Multer.File,cb:(error: Error, acceptFile: boolean) => void)=>{
       const ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return cb(null,false)
        }
        cb(null, true)
      }
