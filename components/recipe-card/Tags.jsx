import { useState, useEffect } from 'react';
import { Box, Chip, Stack, TextField } from '@mui/material';
import styled from '@emotion/styled';

//mediaquery to ignore Tags in Print view
const PrintBox = styled(Box)`
@media print {
  display: none
}
`

export default function TagsInput(props) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchRecipeLabels = async () => {
      try {
        const response = await fetch(`/api/recipes?id=${props.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch recipe labels');
        }
        const { labels } = await response.json();
        setTags(labels);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeLabels();
  }, [props.id]);

  const handleAddLabel = async (e) => {
    if (e.key !== 'Enter') return;
    const value = e.target.value.trim();
    if (!value) return;
    const response = await fetch('/api/recipes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: props.id,
        labels: [...tags, value],
      }),
    });
    if (response.ok) {
      setTags((prevTags) => [...prevTags, value]);
      e.target.value = '';
    } else {
      console.error('Failed to update labels.');
    }
  };

  const handleRemoveTag = async (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    const response = await fetch('/api/recipes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: props.id,
        labels: updatedTags,
      }),
    });
    if (response.ok) {
      setTags(updatedTags);
    } else {
      console.error('Failed to update labels.');
    }
  };

  return (
    <PrintBox>
      <TextField
          variant="standard"
          size="small"
          sx={{ pl: 3, pb: 3 }}
          placeholder="Add a tag"
          onKeyDown={handleAddLabel}
        />
      <Stack direction="row" spacing={1}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onDelete={() => handleRemoveTag(tag)}
          />
        ))}
      </Stack>
    </PrintBox>
  );
}


