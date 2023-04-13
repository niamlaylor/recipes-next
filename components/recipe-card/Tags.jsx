import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function TagsInput(){
    const [tags, setTags] = useState([])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
      <Box>
          { tags.map((tag, index) => (
              <Box key={index}>
                <Typography>{tag}</Typography>
                <Typography onClick={() => removeTag(index)}>&times;</Typography>
              </Box>
          )) }
          <TextField variant="standard" size="small" sx={{ pl: 2 }} onKeyDown={handleKeyDown} placeholder="Add a tag" />
      </Box>
  )
}
