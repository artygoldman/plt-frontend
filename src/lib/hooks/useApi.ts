'use client';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axiosInstance from '../api';
import {
  Biomarker,
  BiomarkerHistory,
  DigitalTwin,
  Agent,
  AgentSession,
  Protocol,
  DailyContract,
  InventoryItem,
  LongevityScore,
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export function useBiomarkers(): UseQueryResult<Biomarker[], Error> {
  return useQuery({
    queryKey: ['biomarkers'],
    queryFn: async () => {
      const response = await axiosInstance.get(`${API_BASE_URL}/biomarkers`);
      return response.data;
    },
  });
}

export function useBiomarkerHistory(
  biomarkerId: string
): UseQueryResult<BiomarkerHistory[], Error> {
  return useQuery({
    queryKey: ['biomarker-history', biomarkerId],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `${API_BASE_URL}/biomarkers/${biomarkerId}/history`
      );
      return response.data;
    },
    enabled: !!biomarkerId,
  });
}

export function useDigitalTwin(userId?: string): UseQueryResult<DigitalTwin, Error> {
  return useQuery({
    queryKey: ['digital-twin', userId],
    queryFn: async () => {
      const url = userId
        ? `${API_BASE_URL}/digital-twin/${userId}`
        : `${API_BASE_URL}/digital-twin`;
      const response = await axiosInstance.get(url);
      return response.data;
    },
  });
}

export function useContracts(): UseQueryResult<DailyContract[], Error> {
  return useQuery({
    queryKey: ['contracts'],
    queryFn: async () => {
      const response = await axiosInstance.get(`${API_BASE_URL}/contracts`);
      return response.data;
    },
  });
}

export function useProtocols(): UseQueryResult<Protocol[], Error> {
  return useQuery({
    queryKey: ['protocols'],
    queryFn: async () => {
      const response = await axiosInstance.get(`${API_BASE_URL}/protocols`);
      return response.data;
    },
  });
}

export function useAgentSessions(): UseQueryResult<AgentSession[], Error> {
  return useQuery({
    queryKey: ['agent-sessions'],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `${API_BASE_URL}/agent-sessions`
      );
      return response.data;
    },
  });
}

export function useInventory(): UseQueryResult<InventoryItem[], Error> {
  return useQuery({
    queryKey: ['inventory'],
    queryFn: async () => {
      const response = await axiosInstance.get(`${API_BASE_URL}/inventory`);
      return response.data;
    },
  });
}

export function useLongevityScore(userId?: string): UseQueryResult<LongevityScore, Error> {
  return useQuery({
    queryKey: ['longevity-score', userId],
    queryFn: async () => {
      const url = userId
        ? `${API_BASE_URL}/longevity-score/${userId}`
        : `${API_BASE_URL}/longevity-score`;
      const response = await axiosInstance.get(url);
      return response.data;
    },
  });
}

export function useAgents(): UseQueryResult<Agent[], Error> {
  return useQuery({
    queryKey: ['agents'],
    queryFn: async () => {
      const response = await axiosInstance.get(`${API_BASE_URL}/agents`);
      return response.data;
    },
  });
}
