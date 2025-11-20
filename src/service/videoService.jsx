import React, { useState, useRef } from 'react';



export const fetchVideoData = async (inputUrl) => {
  if (!inputUrl) {
    throw new Error("No hay URL proporcionada");
  }

  const url = `https://agricultural-anjela-ltasaycoqs-765b093c.koyeb.app/api/download?url=${encodeURIComponent(inputUrl)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return "";
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
