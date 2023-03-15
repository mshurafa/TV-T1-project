import React from 'react'
import { Skeleton } from 'primereact/skeleton';

type Props = {}

export function CellSkeleton({ rowData, bodyTemplate }: Props) {
    if (!rowData) {
        return <Skeleton width="50%" />;
      }

      return bodyTemplate(rowData);
}

export default CellSkeleton
