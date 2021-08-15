import mongoose from 'mongoose'
import bcrypt from 'bcrypt'; 

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, 
    trim: true, 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true
  }, 
  password: { 
    type: String, 
    required: true,
  }, 
  isAdmin: { 
    type: Boolean, 
    required: true, 
    default: false
  }
})
userSchema.methods.matchPassword = async function(enteredPassword) { 
  return await bcrypt.compare(enteredPassword,this.password); 
}
userSchema.pre('save',async function(next) { 
  if(!this.isModified('password')) { 
    //if the password field is not modified then we shouldn't call this function . 
    next(); 
  }
  this.password = await bcrypt.hash(this.password,10); 
})

const User = mongoose.model('User',userSchema); 
export default User; 