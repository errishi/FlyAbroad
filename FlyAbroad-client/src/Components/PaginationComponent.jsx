import React from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination';

const PaginationComponent = ({ metadata = {}, onPageChange }) => {
    const currentPage = metadata?.currentPage || 1;
    const totalPages = metadata?.totalPages || 1;
    const hasNextPage = metadata?.hasNextPage || false;
    const hasPrevPage = metadata?.hasPrevPage || false;

    if (totalPages <= 1) {
        return null; // Don't render pagination if there's only one page
    }

    return (
        <div className="py-5 md:py-8 lg:py-10">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage - 1)
                        }}
                            className={!hasPrevPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => onPageChange(1)}>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => onPageChange(metadata.currentPage)} isActive>
                            {metadata.currentPage}
                        </PaginationLink>
                    </PaginationItem>
                    {hasNextPage && (
                        <PaginationItem>
                            <PaginationLink onClick={(e) => {
                                e.preventDefault();
                                onPageChange(currentPage + 1);
                            }}>
                                {currentPage + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            onClick={(e) => {
                                e.preventDefault();
                                if (hasNextPage) onPageChange(currentPage + 1);
                            }}
                            className={!hasNextPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

export default PaginationComponent;