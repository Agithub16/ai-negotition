exports.predictStrategy = async (req, res) => {
    const { context } = req.body;
    // Here you could integrate your AI model or call an external service
    const predictedStrategy = await yourAIModel.predict(context);
    res.status(200).json({ strategy: predictedStrategy });
  };
  