import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getWorkflowBySlug } from '../../data/workflows';
import { WorkflowDetailHero } from '../../components/workflow/WorkflowDetailHero';
import { WorkflowProcess } from '../../components/workflow/WorkflowProcess';
import { WorkflowFeatureCards } from '../../components/workflow/WorkflowFeatureCards';
import { PreviousNextNavigation } from '../../components/workflow/PreviousNextNavigation';
import { CTASection } from '../../components/common/CTASection';

export const WorkflowDetailPage = ({ slug: directSlug }) => {
  const { slug: routeSlug } = useParams();
  const currentSlug = directSlug || routeSlug;
  const workflow = getWorkflowBySlug(currentSlug);

  if (!workflow) {
    return <Navigate to="/how-it-works" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F3F9FD]">
      {/* 1. Dedicated Dark Theme Hero */}
      <WorkflowDetailHero workflow={workflow} />

      {/* 2. Step-by-Step Execution Blueprint Process */}
      <WorkflowProcess workflow={workflow} />

      {/* 3. Core Enterprise Feature Safeguards & Capabilities */}
      <WorkflowFeatureCards workflow={workflow} />

      {/* 4. Global Action Conversion CTA */}
      <CTASection
        title={`Ready to streamline ${workflow.title.toLowerCase()}?`}
        subtitle="Activate your free 14-day enterprise trial with zero hardware lock-in and complete policy customization."
        primaryText="Start Free Trial"
        primaryTo="/register"
        secondaryText="Book Guided Demo"
        secondaryTo="/contact"
      />

      {/* 5. Sequential Step Navigation */}
      <PreviousNextNavigation workflow={workflow} />
    </div>
  );
};

export default WorkflowDetailPage;
