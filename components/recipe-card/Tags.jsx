import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


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
        <Stack direction="row" spacing={1}>
          { tags.map((tag, index) => (
              <Chip key={index}
                    label={tag+" ×"} 
                    onClick={() => removeTag(index)}/>
          )) }
          <TextField variant="standard" size="small" sx={{ pl: 2 }} onKeyDown={handleKeyDown} placeholder="Add a tag" />
      </Stack>
      </Box>
  )
}


