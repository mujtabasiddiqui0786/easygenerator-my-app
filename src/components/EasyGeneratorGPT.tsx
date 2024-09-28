// src/components/EasyGeneratorGPT.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  IconButton,
  InputAdornment,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import apiClient from '../apiClient';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
}));

const MessagesContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowY: 'auto',
  marginBottom: theme.spacing(2),
}));

const MessageBubble = styled(motion.div)<{ sender: 'user' | 'bot' }>(({ theme, sender }) => ({
  maxWidth: '70%',
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(1),
  borderRadius: theme.spacing(2),
  backgroundColor: sender === 'user' ? theme.palette.primary.main : theme.palette.grey[200],
  color: sender === 'user' ? '#fff' : '#000',
  alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
  wordWrap: 'break-word',
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const EasyGeneratorGPT: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    setInput(''); // Clear input box

    try {
      const response = await apiClient.post('/generate', { prompt: input });
      const botMessage: Message = { sender: 'bot', text: response.data.output };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const botMessage: Message = {
        sender: 'bot',
        text: 'Error fetching response. Please try again.',
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey && !loading) {
      event.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <ChatContainer elevation={3}>
        <Typography variant="h4" gutterBottom align="center">
          EasyGeneratorGPT
        </Typography>
        <MessagesContainer>
          {messages.map((msg, index) => (
            <MessageBubble
              key={index}
              sender={msg.sender}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg.text}
            </MessageBubble>
          ))}
          <div ref={messagesEndRef} />
        </MessagesContainer>
        {loading && (
          <Box display="flex" justifyContent="center" mb={2}>
            <CircularProgress />
          </Box>
        )}
        <InputContainer>
          <TextField
            variant="outlined"
            placeholder="Type your message..."
            fullWidth
            multiline
            maxRows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </InputContainer>
      </ChatContainer>
    </Container>
  );
};

export default EasyGeneratorGPT;
