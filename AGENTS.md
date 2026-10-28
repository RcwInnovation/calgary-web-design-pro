# Project rules
- Keep discovery-session offer terms in a shared configuration, separate from paid diagnostic pricing, so all consultation entry points stay consistent.
- The homepage owns mobile dock and chat/voice open state; reuse the existing consultation modal and preserve standalone desktop launchers.
- Use the official ElevenLabs client SDK for custom voice launchers and terminate sessions on close; the embedded widget has no supported external start-call API.
- Define dock colors, gradients and shadows in global CSS tokens and use the shared Button component for new controls.