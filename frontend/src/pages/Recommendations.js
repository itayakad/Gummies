import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecommendationsChart from './RecommendationsChart'; // Import the chart component

function Recommendations() {
  const location = useLocation();
  const { solutionCounts } = location.state || {};
  const [sortedRecommendations, setSortedRecommendations] = useState([]);

  useEffect(() => {
    if (solutionCounts) {
      const totalCount = Object.values(solutionCounts).reduce((sum, count) => sum + count, 0);
      const sorted = Object.entries(solutionCounts)
        .map(([solution, count]) => ({
      