function QueueDisplay({ queue, updateStatus, removeCustomer }) {
  return (
    <>
      <div>QueueDisplay</div>
      <h2>Current Queue</h2>
      {queue.lenght === 0 ? (
        <p>No customer data available...</p>
      ) : (
        <div>
          {queue.map((customer) => (
            <>
            <div key={customer.id}>
              <p>Name: {customer.name}</p>
              <p>Service: {customer.service}</p>
              <span>{customer.status}</span>
            </div>
            <div>
                {customer.status ==='waiting' && (
                <button onClick={() => updateStatus(customer.id,'serving')}>
                    Serve
                </button>
                )}
                {customer.status ==='serving' && (
                <button onClick={() => updateStatus(customer.id,'served')}>
                    Mark as Served
                </button>
                )}
                {customer.status ==='served' && (
                <button onClick={() => removeCustomer(customer.id)}>
                    Remove
                </button>
                )}
            </div>
            </>
            
          ))}
        </div>
      )}

    </>
  );
}

export default QueueDisplay;
